import qs from "qs"
import { getStrapiURL } from "./api-helpers"
import { type StrapiResponse } from "./model"

export async function fetchAPI<T = unknown>(
  path: string,
  urlParamsObject = {},
  options = {}
): Promise<StrapiResponse<T>> {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    }

    // Build request URL
    const queryString = qs.stringify(urlParamsObject)
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    )
  }
}
