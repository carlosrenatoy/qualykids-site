import type { SVGProps } from "react";

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M3 11.2 12 3l9 8.2v9.3a.5.5 0 0 1-.5.5H15v-6H9v6H3.5a.5.5 0 0 1-.5-.5z" />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M3 5h18v14H3zm2 2 7 5.1L19 7v-.1H5zm0 10h14V9.4l-7 5.1-7-5.1z" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M6.6 3.5 10 4.3l.8 5-2.1 1.5a11.6 11.6 0 0 0 4.5 4.5l1.5-2.1 5 .8.8 3.4c.2.8-.3 1.6-1.1 1.8-3.2.8-7.3-.6-10.6-3.9C5.5 12 4.1 7.9 4.9 4.7c.2-.8.9-1.3 1.7-1.2" />
    </svg>
  );
}

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
