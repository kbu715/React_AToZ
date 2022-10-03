import type { Appointment } from '../../../../shared/types';

// number : 해당 달의 날짜
// Appointment[] : 예약 리스트
export type AppointmentDateMap = Record<number, Appointment[]>;
