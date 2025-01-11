export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  email: string;
  phone: string;
  profilePicture: string;
  availability: string[];
  experience: number;
  education: string;
  consultationFee: number;
  rating: number;
  totalPatients: number;
  languages: string[];
  address: string;
}

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  profilePicture: string;
  address: string;
  bloodGroup: string;
  allergies: string[];
  medicalHistory: {
    condition: string;
    diagnosis: string;
    date: string;
  }[];
  lastVisit: string;
  upcomingAppointment: string;
  insuranceInfo: {
    provider: string;
    policyNumber: string;
    expiryDate: string;
  };
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  profilePicture: string;
  department: string;
  joinDate: string;
  schedule: {
    day: string;
    startTime: string;
    endTime: string;
  }[];
  qualifications: string[];
  emergencyContact: {
    name: string;
    relation: string;
    phone: string;
  };
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show';
  type: string;
  notes: string;
  duration: number;
}

export interface Treatment {
  id: string;
  name: string;
  description: string;
  duration: number;
  cost: number;
  category: string;
}

export interface Invoice {
  id: string;
  patientId: string;
  patientName: string;
  date: string;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
  items: {
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }[];
  subtotal: number;
  tax: number;
  total: number;
  paymentMethod?: string;
  paymentDate?: string;
}