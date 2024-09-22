import tsEslint from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';

const svelteConfig = tsEslint.config({
  files: ['**/*.svelte'],
  extends: [...svelte.configs['flat/recommended']],
  languageOptions: {
    parser: svelteParser,
    parserOptions: { parser: tsEslint.parser },
  }
});

export default [
  ...svelteConfig,
  {
    rules: {
      'svelte/no-restricted-html-elements': [
        'error',
        {
          elements: ['h2', 'h3', 'h4', 'h5', 'h6'],
          message:
            'Sectionコンポーネントのslot="heading"を使用してください。',
        },
      ],
    },
  },
];
