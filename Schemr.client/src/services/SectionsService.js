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

  async createSection(data) {
    const res = await api.post('api/sections', data)
    logger.log('createSection', res.data)
    AppState.sections = [...AppState.sections, res.data]
  }

  async deleteSection(sectionId) {
    const res = await api.delete(`api/sections/${sectionId}`)
    logger.log('deleteSection', res.data)
    AppState.sections = AppState.sections.filter(s => s.id !== sectionId)
    // NOTE unsure if this will be needed vvvvv
    // AppState.sectionColors = AppState.sectionColors.filter(c => c.sectionId !== sectionId)
  }
}

export const sectionsService = new SectionsService()