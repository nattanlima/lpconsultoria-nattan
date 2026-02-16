# Implementation Plan: FazQueVende Landing Page

Create a premium, conversion-focused landing page for Nattan Lima's consultancy, following 2026 design standards (dark mode, emerald accents, glassmorphism) and integrating Google Calendar for booking and payment.

## User Review Required

> [!IMPORTANT]
> **Socratic Gate Questions:**
> 1. **Tecnologia**: Proponho utilizar **Next.js 15 (App Router)** com **Tailwind CSS v4** e **Framer Motion** para as animações. Você concorda com essa stack ou prefere algo mais simples (Vite/HTML)?
> 2. **Design**: Vou seguir os padrões do ecossistema Prisme (Slate 900 + Emerald 500). Prefere que eu crie uma paleta personalizada ou a consistência com o `chatbot.prismeapp.com.br` é a prioridade absoluta?
> 3. **Google Agenda**: Integrado! Usando a solução nativa indicada.
> 4. **Imagens**: Usarei placeholders (`generate_image` ou marcas de posição) para logos e fotos, conforme solicitado. Você tem as dimensões preferidas ou devo seguir o padrão da spec?

## Proposed Changes

### [Component Name] Landing Page Core

#### [NEW] [fazquevende-landing-page.md](file:///Users/nattanslima/Desktop/consultorianattan/fazquevende-landing-page.md)
*Standard project plan file.*

#### [NEW] [index.html / Next.js Structure]
*Initialize the project structure (assuming Next.js upon approval).*

### UI Seções (Design System 2026)

*   **Hero**: Efeito de digitação, Badge pill, Radial Gradient.
*   **Problemas**: Grid de cards glassmorphism com ícones Lucide.
*   **Oferta**: Card central com destaque Emerald e logic de countUp no preço.
*   **Integrations**: Agendamento nativo Google Calendar (Stripe integrado).

## Verification Plan

### Automated Tests
- `npm run lint`: Verificar padrões de código e TypeScript.
- `python .agent/scripts/verify_all.py . --url http://localhost:3000`: Auditoria de performance, UX e acessibilidade.

### Manual Verification
1. **Responsive Test**: Validar o comportamento em dispositivos móveis (85% do tráfego).
2. **Animation Check**: Verificar se as microinterações e scroll-reveals estão fluidos.
3. **Flow Test**: Simular o clique no CTA e verificar a abertura do agendamento do Google Calendar.
