<template>
  <div>
  <!-- <div>
    <h3>비디오 상세보기</h3>
    <div>{{ video.videoId }}</div>
    <div>{{ video.title }}</div>
    <div>{{ video.videoViewCnt }}</div>
    <div>{{ video.name }}</div>
    <div>{{ video.url }}</div>
  </div> -->

  <div>
    <h3>{{video.title}}의 리뷰목록</h3>
    <hr />
    <div>
      <table>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>조회수</th>
          <th>등록일</th>
        </tr>
        <tr v-for="review in reviews" :key="review.reviewId">
          <td>{{ review.reviewId }}</td>
          <td>
            <router-link :to="`/board/review/${review.reviewId}`">{{
              review.title
            }}</router-link>
          </td>
          <td>{{ review.userId }}</td>
          <td>{{ review.reviewViewCnt }}</td>
          <td>{{ review.createAt }}</td>
        </tr>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'VideoDetail',
  computed: {
    ...mapState(['video', 'reviews'])
  },
  created() {
    const pathName = new URL(document.location).pathname.split('/');
    const id = pathName[pathName.length - 1];
    this.$store.dispatch('getVideo', id);
    this.$store.dispatch('getReviews', id);
  },
};
</script>

<style></style>
