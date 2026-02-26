export default function ClaudeIcon({ size = 32, color = "#D97757" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(60,60)">
        <rect x="-5" y="-38" width="10" height="26" rx="5" fill={color} transform="rotate(0)" />
        <rect x="-5" y="-38" width="10" height="26" rx="5" fill={color} transform="rotate(60)" />
        <rect x="-5" y="-38" width="10" height="26" rx="5" fill={color} transform="rotate(120)" />
        <rect x="-5" y="-38" width="10" height="26" rx="5" fill={color} transform="rotate(180)" />
        <rect x="-5" y="-38" width="10" height="26" rx="5" fill={color} transform="rotate(240)" />
        <rect x="-5" y="-38" width="10" height="26" rx="5" fill={color} transform="rotate(300)" />
        <circle cx="0" cy="0" r="8" fill={color} />
      </g>
    </svg>
  );
}
