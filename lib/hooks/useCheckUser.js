import { useQuery } from '@tanstack/react-query';

async function fetchUserData(userId) {
    const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/manageUsersApis/check-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: userId }),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
}

export function useCheckUser(userId) {
    return useQuery({
        queryKey: ['checkUser', userId],
        queryFn: () => fetchUserData(userId),
        enabled: !!userId,
    });
}
