import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import { searchPosts } from "../../lib/appwrite.js";
import useAppwrite from "../../hooks/useAppwrite.js";
import VideoCard from "../../components/VideoCard.jsx";
import { useLocalSearchParams } from "expo-router";

const Bookmark = () => {
  // const { query } = useLocalSearchParams();
  // const { data: posts, refetch } = useAppwrite(() => searchPosts(query));

  // // console.log(query, posts);

  // useEffect(() => {
  //   refetch();
  // }, [query]);
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4">
            <Text className="font-pmedium text-sm text-gray-100">
              Your Saved Videos
            </Text>
            {/* <Text className="text-2xl font-psemibold text-white">{query}</Text>
            <SearchInput intialQuery={query} /> */}
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No Videos found for this search query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Bookmark;
