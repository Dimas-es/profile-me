# Font Files

This directory is for self-hosting the Helvetica Neue font files.

To use self-hosted Helvetica Neue:

1. Place the following font files in this directory:
   - HelveticaNeue-Light.woff2
   - HelveticaNeue.woff2
   - HelveticaNeue-Medium.woff2
   - HelveticaNeue-Bold.woff2

2. Uncomment the `helveticaNeue` configuration in `app/fonts.ts`

3. Update the `layout.tsx` file to use `helveticaNeue.variable` instead of `systemFont.variable`

Note: You must have a valid license to use Helvetica Neue. The font is owned by Monotype and is not freely available.
