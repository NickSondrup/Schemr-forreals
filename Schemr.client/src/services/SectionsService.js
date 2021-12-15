import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class SectionsService {
  async getSections(projectId) {
    AppState.sections = []
    const res = await api.get(`api/projects/${projectId}/sections`)
    logger.log('getSections', res.data)
    AppState.sections = res.data
  }

  async getSectionColors(sectionId) {
    AppState.sectionColors = []
    const res = await api.get(`api/sections/${sectionId}/colors`)
    AppState.sectionColors = res.data
    logger.log('getSectionColors', AppState.sectionColors)
  }
}

export const sectionsService = new SectionsService()