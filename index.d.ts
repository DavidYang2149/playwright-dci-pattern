export function describe(title: string, callback: () => void): void;

export function context(title: string, callback: () => void): void;

export function it(title: string, callback: (args: any, testInfo: any) => void | Promise<void>): void;
