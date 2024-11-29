import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'Ramelax',
		customCss: [
			'./src/tailwind.css',
		  ],
        logo: {
            src: './src/assets/Ramelax_logo.png'
        },
        
        sidebar: [
            {
                label: 'Introduction',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Introduction', slug: 'introduction/what-is-ramelax' },
                    { label: 'How it Works', slug: 'introduction/how-it-works' },
                    { label: 'How to Start', slug: 'introduction/how-to-start' },
                    { label: 'Key Benefits', slug: 'introduction/key-benefits' },
                ],
            },
            {
                label: 'Asset Types',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Stocks', slug: 'asset-types/stocks' },
                    { label: 'Bonds', slug: 'asset-types/bonds' },
                ],
            },
            {
                label: 'On-chain',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Wallet Whitelist', slug: 'on-chain/wallet-whitelist' },
                    { label: 'P2P Market', slug: 'on-chain/p2p-market' },
                ],
            },
            {
                label: 'Legal & Compliance',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Regulatory Framework and Platform Assurance', slug: 'legal-compliance/regulatory-framework' },
                    { label: 'Kyc Requirements', slug: 'legal-compliance/kyc-requirements' },
                    { label: 'Terms of Service', slug: 'legal-compliance/terms-of-service' },
                ],
            }
        ],
		}), tailwind()],
});