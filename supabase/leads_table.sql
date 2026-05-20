-- Supabase SQL Script for Maleo AI Leads Table
-- Run this in Supabase SQL Editor to create the leads table

-- Create the leads table
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT NOT NULL,
    role TEXT NOT NULL,
    company_size TEXT NOT NULL,
    pain_point TEXT NOT NULL,
    message TEXT DEFAULT '',
    source TEXT DEFAULT 'unknown',
    form_type TEXT NOT NULL,
    submitted_at TIMESTAMPTZ DEFAULT NOW(),
    page_url TEXT,
    referrer TEXT,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_company ON leads(company);

-- Add comments for documentation
COMMENT ON TABLE leads IS 'Stores leads captured from website forms';
COMMENT ON COLUMN leads.status IS 'Lead status: new, contacted, qualified, converted, lost';
COMMENT ON COLUMN leads.form_type IS 'Type of form: pilot, consultation, geo_audit';
COMMENT ON COLUMN leads.pain_point IS 'Customer pain point selected from dropdown';
COMMENT ON COLUMN leads.source IS 'How customer heard about us';

-- Create a view for active leads (non-converted, non-lost)
CREATE OR REPLACE VIEW active_leads AS
SELECT *
FROM leads
WHERE status NOT IN ('converted', 'lost')
ORDER BY created_at DESC;

-- Create a function to update lead status
CREATE OR REPLACE FUNCTION update_lead_status(lead_id UUID, new_status TEXT)
RETURNS VOID AS $$
BEGIN
    UPDATE leads
    SET status = new_status
    WHERE id = lead_id;
END;
$$ LANGUAGE plpgsql;

-- Create Row Level Security (RLS) policies (optional, but recommended)
-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations for service role
CREATE POLICY "Enable all operations for service role" ON leads
    FOR ALL
    USING (true)
    WITH CHECK (true);

-- If you want to add authentication later, you can add policies like:
-- CREATE POLICY "Enable read for authenticated users" ON leads
--     FOR SELECT
--     USING (auth.role() = 'authenticated');

-- Sample query to get lead statistics
-- SELECT 
--     status,
--     COUNT(*) as count,
--     DATE_TRUNC('month', created_at) as month
-- FROM leads
-- GROUP BY status, DATE_TRUNC('month', created_at)
-- ORDER BY month DESC, count DESC;
