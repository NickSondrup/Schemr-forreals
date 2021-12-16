import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProjectsService{

  async getProjects() {
    const res = await api.get('api/projects')
    logger.log('getProjects', res)
    AppState.projects = res.data
  }

  async getProject(projectId) {
    AppState.project = {}
    const res = await api.get(`api/projects/${projectId}`)
    logger.log('getProject', res)
    AppState.project = res.data
  }

  async createProject(data) {
    const res = await api.post('api/projects', data)
    logger.log('createProject', res.data)
    AppState.projects.unshift(res.data)
  }
}

export const projectsService = new ProjectsService()