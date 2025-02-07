import { useEffect, useState } from 'react';
import { User } from '@/interfaces/User';

import { Loader } from '@/components/Loader';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
};

export const Users = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchUsers()
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!users || users.length === 0) {
    return <p data-testid="no-users">No users found.</p>;
  }

  return (
    <div data-testid="users">
      {users.map(user => (
        <Card key={user.id} data-testid="user-card">
          <CardHeader>
            <CardTitle data-testid="user-name">{user.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription data-testid="user-description">{user.address.street}, {user.address.city}</CardDescription>
          </CardContent>
          <CardFooter>
            <CardDescription data-testid="user-company">{user.company.name}</CardDescription>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
