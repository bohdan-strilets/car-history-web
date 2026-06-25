const EU_STARS = (() => {
  const R = 10;
  const CX = 14;
  const CY = 14;
  return Array.from({ length: 8 }, (_, i) => {
    const angle = (i * 45 - 90) * (Math.PI / 180);
    return {
      x: CX + R * Math.cos(angle),
      y: CY + R * Math.sin(angle),
    };
  });
})();

export const EuStrip = () => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      {EU_STARS.map((pos, i) => (
        <text
          key={i}
          x={pos.x}
          y={pos.y}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="7"
          fill="#FFD700"
        >
          ★
        </text>
      ))}
    </svg>
  );
};
