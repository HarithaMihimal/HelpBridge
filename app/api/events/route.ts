import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    const limit = parseInt(searchParams.get('limit') || '20')
    const page = parseInt(searchParams.get('page') || '1')

    // Build where clause
    const where: any = {
      isActive: true,
    }

    if (category && category !== 'ALL') {
      where.category = category
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { location: { contains: search, mode: 'insensitive' } },
      ]
    }

    // Fetch events with organization details
    const events = await prisma.event.findMany({
      where,
      include: {
        organization: {
          select: {
            name: true,
            logo: true,
            isVerified: true,
          },
        },
        registrations: {
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: limit,
      skip: (page - 1) * limit,
    })

    // Get total count for pagination
    const total = await prisma.event.count({ where })

    return NextResponse.json({
      events,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      description,
      category,
      location,
      latitude,
      longitude,
      startDate,
      endDate,
      maxVolunteers,
      skills,
      requirements,
      isRemote,
      image,
    } = body

    // Validate required fields
    if (!title || !description || !category || !location || !startDate || !endDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get user from session (you'll need to implement session handling)
    // For now, we'll use a placeholder organization ID
    const organizationId = 'placeholder-org-id'

    const event = await prisma.event.create({
      data: {
        title,
        description,
        category,
        location,
        latitude,
        longitude,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        maxVolunteers,
        skills: skills ? JSON.stringify(skills) : null,
        requirements,
        isRemote: isRemote || false,
        image,
        organizationId,
      },
      include: {
        organization: {
          select: {
            name: true,
            logo: true,
            isVerified: true,
          },
        },
      },
    })

    return NextResponse.json(event, { status: 201 })
  } catch (error) {
    console.error('Error creating event:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 