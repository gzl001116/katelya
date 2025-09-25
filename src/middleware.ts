/* eslint-disable no-console */

import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  // 移除所有身份验证逻辑，允许直接访问
  return NextResponse.next();
}

// 配置middleware匹配规则 - 移除所有拦截规则
export const config = {
  matcher: [],
};
