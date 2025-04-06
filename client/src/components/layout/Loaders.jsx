import { Grid, Skeleton, Box, Toolbar, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const LayoutLoader = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const bubbleHeight = isMdUp ? 60 : isSmUp ? 50 : 40;

  return (
    <Box height="90vh" bgcolor="#f5f5f5">
      {/* Header Skeleton */}
      <Box height="3.5rem" bgcolor="#ddd">
        <Toolbar>
          <Skeleton
            variant="text"
            width={100}
            height={24}
            sx={{
              bgcolor: "#fff",
              display: { xs: "none", sm: "block" },
              borderRadius: 1,
            }}
          />
          <Box sx={{ flexGrow: 1 }} />
          {[...Array(5)].map((_, i) => (
            <Skeleton
              key={i}
              variant="circular"
              width={30}
              height={30}
              sx={{ bgcolor: "#fff", mx: 0.5 }}
            />
          ))}
        </Toolbar>
      </Box>

      {/* Body Skeleton */}
      <Grid container height="calc(90vh - 3.5rem)" mt={1}>
        {/* Skeleton 1 - Full Height */}
        <Grid
          size={{ sm: 4, md: 3 }}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Skeleton
            variant="rectangular"
            animation="wave"
            height="100%"
            sx={{ bgcolor: "#ddd", borderRadius: 2, m: 0.5 }}
          />
        </Grid>

        {/* Skeleton 2 - Chat Bubbles Full Height */}
        <Grid size={{ xs: 12, sm: 8, md: 6 }}>
          <Box height="100%" width="100%" px={2}>
            <Stack
              spacing={1.2}
              height="100%"
              justifyContent="center"
              py={1}
              overflow="hidden"
            >
              {[...Array(12)].map((_, i) => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  animation="wave"
                  height={bubbleHeight}
                  width={`${60 + (i % 3) * 10}%`}
                  sx={{
                    bgcolor: "#ccc",
                    borderRadius: 8,
                    alignSelf: i % 2 === 0 ? "flex-start" : "flex-end",
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* Skeleton 3 - Single Block */}
        <Grid
          size={{ md: 3 }}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Box height="50%" width="100%" px={2}>
            <Skeleton
              variant="rectangular"
              animation="wave"
              height="100%"
              sx={{ bgcolor: "#ddd", borderRadius: 2 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
