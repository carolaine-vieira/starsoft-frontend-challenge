'use client';

import { HydrationBoundary } from '@tanstack/react-query';
import type { DehydratedState } from '@tanstack/react-query';

type Props = {
	state: DehydratedState;
	children: React.ReactNode;
};

export function ReactQueryHydrate({ state, children }: Props) {
	return <HydrationBoundary state={state}>{children}</HydrationBoundary>;
}
