export class ZeroDevisorError extends Error { }

export function divide(devidend: number, devisor: number): number {
  if (devisor === 0) {
    throw new ZeroDevisorError('0で割ることはできません')
  }
  return devidend / devisor
}
