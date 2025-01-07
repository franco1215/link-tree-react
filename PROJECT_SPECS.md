# Project Specifications

## Project Overview
- **Project Name**: Link Tree React
- **Tech Stack**:
  - Next.js 14.2.16
  - React 18
  - TypeScript
  - Tailwind CSS
  - Radix UI Components
  - ShadcnUI
- **Architecture**: Next.js App Router
- **Version**: 0.1.0


## Core Features
1. Profile Page
   - Fetches chat data from external API
   - Displays chat information in profile
   - Responsive design with max-width 560px
   - Revalidates data every 60 seconds

2. Chat Integration
   - Endpoint: `https://stream.scaleup.com.br/player/v1/chats/codes/${chatCode}/histories`
   - Default chat code: 'b4182bff4b3cf75f9e54f4990f9bd153c0c2973c'
   - Error handling for failed fetches

## Code Conventions

### Styling
- **CSS**: Tailwind CSS with custom configurations
- **Theme**:
  - Custom color scheme with CSS variables
  - Dark mode support
  - Inter font as default
  - Custom animations for:
    - Typing dots
    - Loading spinner
    - Fade in effects
    - Accordion transitions

### TypeScript Configuration
- Target: ES6
- Strict mode enabled
- Module resolution: bundler
- Path aliases configured with '@/' prefix
- JSX preservation

## Component Architecture
1. Layout Component
   - Handles base page structure
   - Implements Inter font
   - Responsive container with padding

2. Profile Template
   - Receives chat data as props
   - Handles profile display logic

## Styling System
### Tailwind Configuration
- Custom color palette with HSL variables
- Extended theme including:
  - Custom colors
  - Border radius variants
  - Animation keyframes
  - Chart colors
  - Sidebar theming

### Animation Specifications 

## Cursor Code Configuration

### Context Prompts
Use these prefixes for better AI assistance:
- `[FEATURE]`: When implementing new features
- `[REFACTOR]`: When refactoring code
- `[FIX]`: When fixing bugs
- `[STYLE]`: When working on styling
- `[TEST]`: When working on tests

### File References
When asking for help, reference files like: 