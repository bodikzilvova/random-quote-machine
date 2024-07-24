import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQuotes = createAsyncThunk(
    'quotes/fetchQuotes',
    async (_, thunkAPI) => {
      const quotes = axios.create({
        baseURL: 'https://api.api-ninjas.com/v1/quotes',
        headers: { 'X-Api-Key': 'kqVghFkeWZwrJWXyTiG0uA==64SISTGfAUATBA7A' }
      });
  
      try {
        const response = await quotes.get();
        return response.data[0];
      } catch (e) {
        console.log('Something went wrong try again');
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );