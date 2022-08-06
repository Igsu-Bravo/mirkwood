interface FrontendConfigurationInterface {
  GOOGLE_MAPS_API_KEY: string
}

const config: FrontendConfigurationInterface = {
  GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY || '',
}

export default config
