import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
    try {
        const response = await axios.get('https://country-code.onrender.com/search/?name=nigeria');
        return NextResponse.json(response.data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch country codes' }, { status: 500 });
    }
}