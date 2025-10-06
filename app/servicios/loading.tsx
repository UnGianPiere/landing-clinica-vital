// app/servicios/loading.tsx
export default function Loading() {
    return (
        <div className="grid sm:grid-cols-3 gap-4 p-10">
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className="animate-pulse bg-gray-200 rounded-xl h-60"
                />
            ))}
        </div>
    );
}
