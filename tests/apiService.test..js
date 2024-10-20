import axios from "axios";
import getUserActivity from "../src/services/apiService";

jest.mock('axios');

describe('getUserActivity', () => {

    it('should throw an error if you username is null or empty', async () => {
        await expect(getUserActivity(null)).rejects.toThrow('Username cannot be null or empty');
        await expect(getUserActivity('')).rejects.toThrow('Username cannot be null or empty');
    });

    it('should return user activity data when the API request is successful', async () => {
        const mockData = [{type: 'PushEvent', id:1}, {type:'CreateEvent', id:2}];
        axios.get.mockResolvedValue({data: mockData});

        const result = await getUserActivity('testuser');
        expect(result).toEqual(mockData);
    });

    it('should throw an error when the API request fails', async () => {
        axios.get.mockRejectedValue(new Error('Network Error'));

        await expect(getUserActivity('testuser')).rejects.toThrow('Error fetching data: Network Error');
    });
});