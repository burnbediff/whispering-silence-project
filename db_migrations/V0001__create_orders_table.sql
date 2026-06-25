CREATE TABLE IF NOT EXISTS t_p44345860_whispering_silence_p.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    contact TEXT NOT NULL,
    service TEXT NOT NULL,
    wish TEXT,
    photo_url TEXT,
    payment_id TEXT,
    paid BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
