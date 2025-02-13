// app/animation/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Magnolia Animation Test',
    description: 'Sequential frame animation of a magnolia flower',
};

export default function AnimationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}