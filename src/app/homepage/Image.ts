export interface CalendarEvent {
  date: string;
  title: string;
}

export interface Image {
  month: string;
  src: string;
  alt?: string;
  events?: CalendarEvent[];
}
