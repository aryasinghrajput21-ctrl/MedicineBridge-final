import type { ExtractedMedicine } from '@/data/demoData';

// Gemini API integration-ready service.
// In production, the image would be sent to a Gemini API endpoint
// (via a server-side edge function to keep the API key secure).
// For this demo, we simulate the AI reading with a realistic delay
// and return sample structured results.

const DEMO_RESULT: ExtractedMedicine[] = [
  {
    name: 'Paracetamol',
    strength: '500 mg',
    dosage_form: 'Tablet',
    quantity: '10',
    confidence: 'high',
    needs_verification: false,
  },
  {
    name: 'Azithromycin',
    strength: '500 mg',
    dosage_form: 'Tablet',
    quantity: '5',
    confidence: 'high',
    needs_verification: false,
  },
  {
    name: 'Cetirizine',
    strength: '10 mg',
    dosage_form: 'Tablet',
    quantity: '7',
    confidence: 'medium',
    needs_verification: true,
  },
];

export interface AnalyzeResult {
  medicines: ExtractedMedicine[];
  unclear: boolean;
  error?: string;
}

export async function analyzePrescription(
  _imageDataUrl: string,
  onProgress?: (message: string) => void
): Promise<AnalyzeResult> {
  // Simulate progressive loading messages
  await delay(1200);
  onProgress?.('loading1');
  await delay(1200);
  onProgress?.('loading2');
  await delay(1200);
  onProgress?.('loading3');
  await delay(800);

  // In production, this would call a Supabase Edge Function that
  // forwards the image to Gemini and returns structured JSON:
  // { "medicines": [{ "name": "", "strength": "", "dosage_form": "", "quantity": "", "confidence": "high", "needs_verification": false }] }

  return { medicines: DEMO_RESULT, unclear: false };
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
