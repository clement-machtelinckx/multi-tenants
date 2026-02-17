export type TenantId = string;

export type TenantConfig = {
    tenantId: TenantId;
    brand: { name: string; logoText?: string };
    defaultLayout?: "default" | "landing";
    features?: Record<string, boolean>;
    cta?: { label: string; href: string };

    contact?: {
        email?: string;
        phone?: string;
        address?: string;
        addressCp?: string;
        addressCity?: string;
        addressCountry?: string;
        social?: {
            twitter?: string;
            facebook?: string;
        };
    };
};



export type TenantTheme = {
    cssVars: Record<string, string>;
};

export type TenantRuntime = {
    tenantId: TenantId;
    config: TenantConfig;
    theme: TenantTheme;
    features: Record<string, boolean>;
};
