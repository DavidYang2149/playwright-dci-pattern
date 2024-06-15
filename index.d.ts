import { PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, TestInfo } from '@playwright/test';

export function describe(title: string, callback: () => void): void;

export function context(title: string, callback: () => void): void;

export function it(title: string, callback: (args: PlaywrightTestArgs & PlaywrightTestOptions & PlaywrightWorkerArgs & PlaywrightWorkerOptions, testInfo: TestInfo) => void | Promise<void>): void;
