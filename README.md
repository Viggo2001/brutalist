# @hotel/ui-components

A brutalist UI component library with bold borders, offset shadows, and a striking blue and white color scheme.

## Installation

```bash
npm install @hotel/ui-components
# or
yarn add @hotel/ui-components
# or
pnpm add @hotel/ui-components
```

## Setup

This library uses Tailwind CSS classes. Make sure your project has Tailwind CSS configured.

Add the package path to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@hotel/ui-components/**/*.{js,ts,jsx,tsx}',
  ],
  // ... rest of config
}
```

## Usage

```tsx
import { Button, Card, CardBody, Input, Badge, Modal, Tabs } from '@hotel/ui-components';

function App() {
  return (
    <Card>
      <CardBody>
        <Input label="Email" type="email" />
        <Button variant="primary">Submit</Button>
        <Badge variant="success">New</Badge>
      </CardBody>
    </Card>
  );
}
```

## Components

### Button
```tsx
<Button variant="primary" size="md">Click Me</Button>
```
- Variants: `primary`, `secondary`, `outline`, `ghost`
- Sizes: `sm`, `md`, `lg`

### Card
```tsx
<Card hover>
  <CardHeader>Header</CardHeader>
  <CardBody>Content</CardBody>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Input
```tsx
<Input label="Email" error="Required field" />
```

### Badge
```tsx
<Badge variant="info">New</Badge>
```
- Variants: `default`, `success`, `warning`, `info`

### Modal
```tsx
<Modal isOpen={open} onClose={() => setOpen(false)} title="Title">
  Content
</Modal>
```

### Tabs
```tsx
<Tabs tabs={[
  { label: 'Tab 1', content: <div>Content 1</div> },
  { label: 'Tab 2', content: <div>Content 2</div> }
]} />
```

## Design Philosophy

Bold, brutalist design with:
- Thick 4px borders
- Offset box shadows
- Sharp edges (no rounded corners)
- Uppercase typography
- High contrast colors

## License

MIT
