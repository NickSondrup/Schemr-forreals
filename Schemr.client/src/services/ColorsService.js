import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ColorsService {
  async getColors() {
    const res = await api.get('api/colors')
    AppState.colors = res.data
    logger.log('getColors', AppState.colors)
  }
}

export const colorsService = new ColorsService()