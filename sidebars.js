/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [
        {
            type: 'category',
            label: 'Projects',
            link: { type: 'doc', id: 'projects-index' },
            collapsible: true,
            collapsed: false,
            items: [
                'conduit-container/index',
                {
                    type: 'category',
                    label: 'OWASP Juice Shop',
                    collapsible: true,
                    collapsed: false,
                    items: [
                        'owasp-juice-shop/index',
                        {
                            type: 'category',
                            label: 'Challenges',
                            collapsible: true,
                            collapsed: false,
                            items: [
                                'owasp-juice-shop/challenges/admin-registration',
                                'owasp-juice-shop/challenges/api-only-xss',
                                'owasp-juice-shop/challenges/captcha-bypass',
                                'owasp-juice-shop/challenges/forged-feedback',
                            ],
                        },
                    ],
                },
                'minecraft-server/index',
                'word-press/index',
                'truck-signs-api/index',
                'baby-tools-shop/index',
            ],
        },
        'legal-notice',
    ],
};

module.exports = sidebars;
