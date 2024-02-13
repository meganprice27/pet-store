export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-02-13'

export const dataset = assertValue(
  process.env.SANITY_STUDIO_DATASET,
  'SANITY_STUDIO_DATASET=production'
)

export const projectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID,
  'SANITY_STUDIO_PROJECT_ID=h1cu2jw0'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
