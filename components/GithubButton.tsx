import { Button, ButtonProps } from "@mantine/core";
import { GithubIcon } from "@mantinex/dev-icons";

import classes from "./GithubButton.module.css";

export function GithubButton(
    props: ButtonProps & React.ComponentPropsWithoutRef<"button">,
) {
    return (
        <Button
            component="a"
            target="_blank"
            href="https://github.com/henriwoodcock/polyline-icons"
            children={props.children}
            leftSection={
                <GithubIcon style={{ width: "1rem", height: "1rem" }} />
            }
            className={classes.githubButton}
        />
    );
}
