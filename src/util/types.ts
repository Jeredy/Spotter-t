export interface DataSheetInterface {
  id: number;
  entity_type: string;
  legal_name: string;
  dba_name: string;
  phone: string;
  physical_address: string;
  p_street: string;
  p_city: string;
  p_state: string;
  p_zip_code: number;
  mailing_address: string;
  m_street: string;
  m_city: string;
  m_state: string;
  m_zip_code: number;
  usdot_number: number;
  power_units: number;
  mcs_150_form_date: number;
  drivers: number;
  mcs_150_mileage_year: string;
  credit_score: string | null;
  record_status: string;
  created_dt: string;
  data_source_modified_dt: string;
}
