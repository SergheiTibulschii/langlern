import { ReactNode } from 'react';

export type WithChildren<P = unknown> = P & { children: ReactNode };
