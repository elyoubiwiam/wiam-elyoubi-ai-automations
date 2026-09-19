ALTER TABLE public.estimate_requests ADD COLUMN systems numeric;
ALTER TABLE public.estimate_requests ADD COLUMN engagement text;
ALTER TABLE public.estimate_requests ALTER COLUMN area DROP NOT NULL;
ALTER TABLE public.estimate_requests ALTER COLUMN service_level DROP NOT NULL;