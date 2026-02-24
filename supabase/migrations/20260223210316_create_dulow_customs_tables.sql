/*
  # DuLow Customs Database Schema

  1. New Tables
    - `audio_products`
      - `id` (uuid, primary key)
      - `name` (text) - Product name
      - `type` (text) - Type of audio equipment (tweeter, woofer, subwoofer, amplifier, etc.)
      - `brand` (text) - Brand name
      - `price` (numeric) - Price in RON
      - `power` (numeric) - Power in watts (optional)
      - `description` (text) - Product description
      - `image_url` (text) - Product image URL
      - `in_stock` (boolean) - Availability status
      - `created_at` (timestamptz)
    
    - `insulation_products`
      - `id` (uuid, primary key)
      - `name` (text) - Product name
      - `layer` (integer) - Layer number (1, 2, or 3)
      - `brand` (text) - Brand name (STP)
      - `description` (text) - Product description
      - `price_per_sqm` (numeric) - Price per square meter in RON
      - `image_url` (text) - Product image URL
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access (products are public)
*/

CREATE TABLE IF NOT EXISTS audio_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL,
  brand text NOT NULL,
  price numeric NOT NULL DEFAULT 0,
  power numeric,
  description text DEFAULT '',
  image_url text DEFAULT '',
  in_stock boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS insulation_products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  layer integer NOT NULL CHECK (layer >= 1 AND layer <= 3),
  brand text NOT NULL DEFAULT 'STP',
  description text DEFAULT '',
  price_per_sqm numeric NOT NULL DEFAULT 0,
  image_url text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE audio_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE insulation_products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view audio products"
  ON audio_products FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view insulation products"
  ON insulation_products FOR SELECT
  TO public
  USING (true);