import { Suspense, use } from 'react'

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

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  return await response.json() as User[];
};

export const Users = () => {
  const data = use(fetchUsers());

  return (
    <Suspense fallback={<Loader />}>
      {data.map(user => (
        <Card key={user.id}>
          <CardHeader>
            <CardTitle>{user.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{user.address.street}, {user.address.city}</CardDescription>
          </CardContent>
          <CardFooter>
          <CardDescription>{user.company.name}</CardDescription>
          </CardFooter>
        </Card>
      ))}
    </Suspense>
  )
}
