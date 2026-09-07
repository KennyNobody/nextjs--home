import qs from 'qs';
import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';
import { fetchPostListServer } from 'entities/Post';

const paginationSchema = z.object({
    page: z.coerce.number().int().min(1).optional().catch(undefined),
    pageSize: z.coerce.number().int().min(1).max(50).optional().catch(undefined),
});

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams.toString();
    const parsed = qs.parse(searchParams, {
        allowDots: false,
    });

    const { page, pageSize } = paginationSchema.parse(parsed.pagination ?? {});

    try {
        const data = await fetchPostListServer({ page, pageSize });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch sandbox list' },
            { status: 500 },
        );
    }
}