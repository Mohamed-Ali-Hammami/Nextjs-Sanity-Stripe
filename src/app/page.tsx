import Link from "next/link";
import Image from "next/image";

import GameCard from "@/components/GameCard/GameCard";
import HeroSection from "@/components/HeroSection/HeroSection";
import GameCategoryCard from "@/components/GameCategoryCard/GameCategoryCard";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import { getCategories, getGames, getRecentGames } from "@/libs/apis";

export default async function Home() {
  const categories = await getCategories();
  const games = await getGames();
  const isTrendingGames = games?.filter((game) => game.isTrending);
  const isFeaturedGame = games?.find((game) => game.isFeatured);
  const recentGames = await getRecentGames()

  return (
    <>
      <HeroSection showLink />

      <section className={sectionClassNames.section}>
        <div className={sectionClassNames.trending}>
          <h2 className={sectionClassNames.trendingTitle}>
            Currently Trending Games
          </h2>
        </div>

        <div className="flex gap-8 flex-wrap">
          {isTrendingGames.map((game) => (
            <GameCard
              key={game._id}
              gameName={game.name}
              imageUrl={game.images[0].url}
              slug={game.slug.current}
              price={game.price}
            />
          ))}
        </div>
      </section>

      {isFeaturedGame && (
        <>
          <h3 className="font-semibold text-2xl max-w-3xl text-center mx-auto text-primary-dark pt-12 sm:pt-28 pb-8 sm:pb-16 leading-[125%] sm:leading-[187%]">
            Featured Game
          </h3>

          <section className={sectionClassNames.featured}>
            <div className={sectionClassNames.featuredContent}>
              <h2 className={featuredClassNames.gameName}>
                {isFeaturedGame.name}
              </h2>
              <p className={featuredClassNames.gameDetails}>
                {isFeaturedGame.description}
              </p>
              <Link href={`/games/${isFeaturedGame.slug.current}`}>
                <Image
                  src={isFeaturedGame.images[0].url}
                  alt={isFeaturedGame.name}
                  width={500}
                  height={500}
                  className={featuredClassNames.gameImage}
                />
              </Link>
            </div>
          </section>
        </>
      )}



    <section
      style={{
        backgroundColor: 'rgba(128, 128, 128, 0.5)', // Grey color with transparency
        backgroundImage: 'none', // Remove the background image
      }}
      className={styles.categorySection}
    >
      <div className={styles.categoryContent}>
        <h2 className={styles.categoryHeading}>Categories</h2>
        <p className={styles.categorySubHeading}>
      Explore a wide range of games, offering thrilling adventures,
      challenging sports, and immersive action gameplay. Discover new
      worlds, compete with friends, and embark on epic quests that will
      keep you entertained for hours.
        </p>
        <div className="flex flex-wrap">
          {categories.map((category) => (
            <GameCategoryCard
              key={category._id}
              categoryImage={category.image}
              categoryName={category.name}
              slug={category.slug.current}
            />
          ))}
        </div>
      </div>
    </section>


      <section id="recent-games" className={recentGamesClasses.section}>
        <h2 className={recentGamesClasses.heading}>Our Recent Games</h2>
        <p className={recentGamesClasses.subHeading}>
          Stay Ahead of the Gaming Curve with Our Latest Games.
        </p>

        <div className="flex rounded gap-8 flex-wrap py-10">
          {recentGames.map((game) => (
            <GameCard
              key={game._id}
              gameName={game.name}
              imageUrl={game.images[0].url}
              price={game.price}
              slug={game.slug.current}
            />
          ))}
        </div>

        <Link href="games" className={sectionClassNames.latestButton}>
          See All
        </Link>
      </section>

      <NewsLetter />
    </>
  );
}

const sectionClassNames = {
  section: "px-6 sm:px-12 md:px-20 lg:px-36 mx-auto py-8 text-white",
  trending: "flex flex-col sm:flex-row items-center justify-between mb-8",
  trendingTitle: "font-bold text-3xl sm:mr-4",
  trendingButton:
    "mt-4 sm:mt-0 px-6 py-2 rounded-md bg-primary hover:bg-primary-dark",
  latestButton:
    "mt-4 sm:mt-0 px-6 py-2 rounded-md bg-primary-gradient border-2 border-primary-dark",
  featured: "pb-24 px-6 sm:px-12 md:px-20 lg:px-36 text-white",
  featuredContent: "mx-auto max-w-screen-xl",
};



const featuredClassNames = {
  gameName: "font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8",
  gameDetails: "max-w-screen-md text-sm mb-8 md:mb-12",
  gameImage: "h-72 md:h-96 lg:h-112 w-full object-cover rounded-lg",
};

const styles = {
  categorySection:
    "bg-center bg-cover bg-no-repeat py-16 sm:py-20 md:py-28 lg:py-32",
  categoryContent: "container mx-auto px-4 sm:px-6 md:px-8",
  categoryHeading:
    "text-center max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 leading-[130%,187%,130%,130%]",
  categorySubHeading:
    "text-center bg-primary-gradient px-8 rounded-3xl py-5 max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-8",
};

const recentGamesClasses = {
  section: "py-16 lg:py-36 px-4 lg:px-36 text-white text-center",
  heading: "text-3xl lg:text-4xl font-bold mb-3",
  subHeading: "text-gray-400 max-w-xl mx-auto lg:text-lg",
};

