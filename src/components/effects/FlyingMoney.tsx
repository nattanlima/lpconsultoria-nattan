"use client";

export const FlyingMoney = () => {
    // Posições fixas para evitar erro de hydration (server vs client)
    const fixedPositions = [12, 28, 45, 61, 78, 89, 34, 56];
    const fixedDurations = [22, 26, 24, 28, 25, 23, 27, 21];

    const moneyElements = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        top: `${fixedPositions[i]}%`,
        delay: `${i * 3}s`,
        duration: `${fixedDurations[i]}s`,
    }));

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 opacity-[0.03]">
            {moneyElements.map((money) => (
                <div
                    key={money.id}
                    className="absolute text-6xl animate-fly-horizontal"
                    style={{
                        top: money.top,
                        left: '-100px',
                        animationDelay: money.delay,
                        animationDuration: money.duration,
                    }}
                >
                    💸
                </div>
            ))}
        </div>
    );
};
