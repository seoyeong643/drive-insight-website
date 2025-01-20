import type { NextRequest } from "next/server";
import { NextResponse, userAgent } from "next/server";

export function middleware(req: NextRequest) {
    const { ua } = userAgent(req);
    console.log(ua);

    if (/iPhone|iPad|iPod/i.test(ua)) {
        // Add AppStore Link
        return NextResponse.redirect("https://www.apple.com/app-store/");
    }
    // Once the play store app is live add an else if statement to route to play store
}

export const config = {
    matcher: "/install",
};
