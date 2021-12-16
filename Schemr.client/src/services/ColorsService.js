import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ColorsService {
  async getColors() {
    const res = await api.get('api/colors')
    AppState.colors = res.data
    logger.log('getColors', AppState.colors)
  }

  async createColor(data) {
    const res = await api.post('api/colors', data)
    logger.log('createColor', res.data)
    AppState.colors.unshift(res.data)
  }

  async deleteColor(colorId) {
    const res = await api.delete(`api/colors/${colorId}`)
    logger.log('deleteColor', res.data)
    AppState.colors = AppState.colors.filter(c => c.id !== colorId)
    AppState.sectionColors = AppState.sectionColors.filter(c => c.colorId !== colorId)
  }
}

export const colorsService = new ColorsService()