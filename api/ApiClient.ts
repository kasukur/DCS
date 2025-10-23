import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

export class ApiClient {
  private client: AxiosInstance;
  private lastResponse: AxiosResponse | null = null;
  private lastError: any = null;

  constructor(baseURL?: string, timeout: number = 10000) {
    this.client = axios.create({
      baseURL: baseURL || '',
      timeout: timeout,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    // Response interceptor to store the last response
    this.client.interceptors.response.use(
      (response) => {
        this.lastResponse = response;
        this.lastError = null;
        return response;
      },
      (error) => {
        this.lastError = error;
        this.lastResponse = error.response || null;
        return Promise.reject(error);
      }
    );
  }

  async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    try {
      const response = await this.client.get(url, config);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async post(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    try {
      const response = await this.client.post(url, data, config);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async put(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    try {
      const response = await this.client.put(url, data, config);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async delete(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    try {
      const response = await this.client.delete(url, config);
      return response;
    } catch (error) {
      throw error;
    }
  }

  getLastResponse(): AxiosResponse | null {
    return this.lastResponse;
  }

  getLastError(): any {
    return this.lastError;
  }

  getResponseData(): any {
    return this.lastResponse?.data || null;
  }

  getResponseStatus(): number | undefined {
    return this.lastResponse?.status;
  }
}
