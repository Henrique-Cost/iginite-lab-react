import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q07scl2skx01xlhywi4g9u/master',
    cache: new InMemoryCache()
})